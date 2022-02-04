export interface SaveClassesProps {
  name: string;
  period: number;
}

function SaveCourses(props: SaveClassesProps[]) {
  //TODO: impletemnt logic to check for duplicates
  localStorage.setItem('classes', JSON.stringify([props]));
}


//course: string, setCourse: React.Dispatch<React.SetStateAction<string>>

function GetCourses() {
  let x: (null | string) = (localStorage.getItem('classes'));
  if (typeof x === 'string') {
    return JSON.parse(x);
  }
}

export {SaveCourses, GetCourses};