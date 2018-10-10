export interface ICourseForInsert{
    idCorso :number,
    titolo :string,
    prezzoBase :number,
    difficolta :number
}

export class CourseForInsert implements ICourseForInsert{
    idCorso :number;
    titolo: string;    
    prezzoBase: number;
    difficolta: number;   
}