import { toast } from "react-toastify";

const imgReduser = (state = {}, action) => {
    switch (action.type) {
        case "IMAGE_UPLOADED": { // bisa tidak pakai kurung kurawal
          toast("Image uploaded..");
          return state;
        }
        
        case "IMAGE_UPLOADED_ERR": {
          toast.error("Image uploaded error...");
          return state;
        }

        default:
            return state;
    }
}

export default imgReduser;