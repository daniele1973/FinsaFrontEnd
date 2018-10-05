export interface ICourseForInsert{
    titolo :string,
    prezzoBase :number,
    difficolta :number
}

export class CourseForInsert implements ICourseForInsert{
    titolo: string;    
    prezzoBase: number;
    difficolta: number;   
}