import { useParams } from 'react-router-dom';

export const useDataLang = (data:Object) =>{
    let { lang } = useParams();
    lang = lang ? lang : 'en'
    interface Data {
        [key: string]: any;
    }
    const productData: Data = data
    return {
        data: productData[lang],
        lang: lang
    }
}