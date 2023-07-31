import { atomWithStorage } from "jotai/utils";

    let userData = atomWithStorage( 'userData', {
        "user": "",
        "university": "",
        "email": "",
        "city": "",
        "degree": "",
        "achievements": [
            {
                "name": "",
                "data": [{}]
            }
        ]
    });

export default userData;