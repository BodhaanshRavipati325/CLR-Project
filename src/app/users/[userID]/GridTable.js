'use client'

import { writeUserDataJSON } from '@/app/firebase';
import { useAuth } from '@clerk/nextjs';
import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {
  DataGrid, GridActionsCellItem, GridRowEditStopReasons, GridRowModes, GridToolbarContainer
} from '@mui/x-data-grid';
import { randomId } from '@mui/x-data-grid-generator';
import { child, get, getDatabase, ref } from 'firebase/database';
import { useAtom } from 'jotai';
import * as React from 'react';
import UploadButton from './UploadButton';
import userData from './UserData';

import { getDownloadURL, getStorage, ref as storageRef } from "firebase/storage";

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
    const id = randomId();
    setRows((oldRows) => [...oldRows, { id, name: '', age: '', isNew: true }]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>
    </GridToolbarContainer>
  );
}

export default function GridTable() {

  const [userDataJSON, setUserDataJSON] = useAtom(userData);

  const [rows, setRows] = React.useState(userDataJSON.artifactHub);
  const [rowModesModel, setRowModesModel] = React.useState({});

  const [isUsed, setIsUsed] = React.useState(false);

  const { isLoaded, userId, sessionId, getToken } = useAuth();
  let userID = userId;

  React.useEffect(() => {

    const dbRef = ref(getDatabase());
    console.log(userID);

    get(child(dbRef, `/users/${userID}/artifactHub`))
      .then((snapshot) => {
        console.log("Snapshot: ", snapshot.val());
        setRows(snapshot.val());
        setIsUsed(true);
      })
      .catch((error) => {
        console.error(error);
      });

    return;
  }, []);

  React.useLayoutEffect(() => {
    if (isUsed) {
      writeUserDataJSON(`/users/${userID}/artifactHub`, rows);
    }

    return;
  }, [rows])


  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });

    console.log(rows);
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns = [
    { field: 'name', headerName: 'Name', width: 180, editable: true },
    { field: 'description', headerName: 'Description', width: 180, editable: true },
    { field: 'imageLink', headerName: 'Image', width: 160, editable: true },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 180,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              key={randomId()}
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: 'primary.main',
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              key={randomId()}
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            key={randomId()}
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            key={randomId()}
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
    {
      field: 'upload',
      type: 'actions',
      headerName: 'Upload',
      width: 160,
      cellClassName: 'actions',
      getActions: ({ id }) => {

        const [image, setImage] = React.useState("");
        const [imageLink, setImageLink] = React.useState("");

        let path = `/users/${userID}/artifactHub/${id}/imageLink`

        React.useEffect(() => {
          for (let i = 0; i < rows.length; i++) {
            if (rows[i].id == id) {
              getDownloadURL(storageRef(getStorage(), path))
              .then((url) => {
                setImageLink(url);
              writeUserDataJSON(`/users/${userID}/artifactHub/${i}/imageLink`, url);
              // console.log(imageLink);
              })
              .catch((error) => {
                console.log(error);
              });

              // if (rows[i].imageLink == "") {
              //   setImageLink(rows[i].imageLink);
              // }
              



            }
          }

          return;
        }, [image, rows]);

        return [
          <div style={{ marginTop: "-27vh", marginLeft: "-30vw" }}>
            <UploadButton path={path} state={setImage}></UploadButton>
          </div>
        ];
      },
    },
  ];

  return (
    <Box
      sx={{
        height: 500,
        width: '64%',
        '& .actions': {
          color: 'text.secondary',
        },
        '& .textPrimary': {
          color: 'text.primary',
        },
        marginTop: '8%',
        marginLeft: '18%'
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        slots={{
          toolbar: EditToolbar,
        }}
        slotProps={{
          toolbar: { setRows, setRowModesModel },
        }}
      />
    </Box>
  );
}
