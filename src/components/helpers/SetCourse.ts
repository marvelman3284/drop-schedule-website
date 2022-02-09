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

export default SaveCourses;
