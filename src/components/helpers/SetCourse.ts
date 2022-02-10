export interface classesProps {
  firstPer: string;
  secondPer: string;
  thirdPer: string;
  fourthPer: string;
  fifthPer: string;
  sixthPer: string;
  seventhPer: string;
  eigthPer: string;
}

function SaveCourses(props: classesProps): void {
  localStorage.setItem('classes', JSON.stringify(props));
}


function ClearCourses(): void {
  localStorage.removeItem('classes');
}


function GetCourses(): (classesProps) {
  let obj: (classesProps) = JSON.parse(localStorage.getItem('classes') || "{}")
  return obj;
}
export {SaveCourses, GetCourses, ClearCourses};
