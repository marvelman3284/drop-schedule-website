export interface SaveClassesProps  {
  name: string;
  period: number;
}

function SaveCourses(props: SaveClassesProps[]) {
  //TODO: impletemnt logic to check for duplicates
  localStorage.setItem('classes', JSON.stringify(props));
}


//course: string, setCourse: React.Dispatch<React.SetStateAction<string>>

function GetCourses(): (SaveClassesProps[]) {
  let x: (null | string) = (localStorage.getItem('classes'));
  let arr: SaveClassesProps[]; 
  if (typeof x === 'string') {
    arr = JSON.parse(x);
    return arr;
  } else {
    arr = [];
    return arr; 
  }
}

export {SaveCourses, GetCourses};
