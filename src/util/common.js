const setLocalStorage = (key, value) => {
    const date = new Date();

    const item = {
        value: value,
        expiry: date.getTime() + (1 * 24 * 60 * 60 * 1000)
    };
    localStorage.setItem(key, JSON.stringify(item));
};

const getLocalStorage = (key) => {
    const itemStr = localStorage.getItem(key);

    if(!itemStr){
        return;
    }else{
        try{
            return JSON.parse(itemStr);
        }catch{
            return;
        }
    }
};

export {
    setLocalStorage
    ,getLocalStorage
};