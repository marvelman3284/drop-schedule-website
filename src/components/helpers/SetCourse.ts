interface classesProps {
  firstPer: string;
  secondPer: string;
  thirdPer: string;
  fourthPer: string;
  fifthPer: string;
  sixthPer: string;
  seventhPer: string;
  eigthPer: string;
}

function SaveCourses(props: classesProps){
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
