export interface SaveClassesProps {
  name: string;
  period: number;
}

function SaveCourses(props: SaveClassesProps[]) {
  //TODO: impletemnt logic to check for duplicates
  localStorage.setItem('classes', JSON.stringify([props]));
}

export default SaveCourses;