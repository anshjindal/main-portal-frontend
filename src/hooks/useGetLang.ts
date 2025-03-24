import { useParams } from 'react-router-dom';

export const useGetLang = () =>{
    let { lang } = useParams();
    lang = lang ? lang : 'en'
    return lang
}