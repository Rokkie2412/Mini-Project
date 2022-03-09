import axios from "axios"

export default axios.create({
    baseURL : 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization : 'Bearer zbIYHkQsmuxNaV8xSSfN05wLQODsM9XDm_Z5CFjZgPSTKlHu7vAVFuLqABGh3GIBszGrXavGHZ1F0g5eim0y4hfCQ-DM2N1L9_wHd33GC7_jfzxD8q3XgTljOLkmYnYx'
    }
});