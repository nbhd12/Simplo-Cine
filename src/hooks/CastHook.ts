import { useFetch } from "./useFetch";
import type { PersonCredit, PersonDetail } from "../types/CoreTypes";

export const useFetchPersonDetails = (personId: string) =>{
    const{data,loading, error, ErrorMsg} = useFetch<PersonDetail> (`/person/${personId}`);
 return {personDetails: data,loading,error, ErrorMsg};
};

export const useFetchPersonalCredit = (personId:string) =>{
    const{data,loading,error,ErrorMsg} = useFetch<{cast:PersonCredit[]}>( `/person/${personId}/combined_credits`);
    const credits: PersonCredit[] = data?.cast ? data.cast.slice(0,10): [];
    return {credits, loading, error, ErrorMsg};
};