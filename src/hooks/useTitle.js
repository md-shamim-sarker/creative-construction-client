import {useEffect} from "react";

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Creative Construction`;
    }, [title]);
};

export default useTitle;