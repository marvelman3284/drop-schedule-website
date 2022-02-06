function SaveCourses(props: string[]) {
  //TODO: impletemnt logic to check for duplicates
  localStorage.setItem('classes', JSON.stringify([props]));
}

export default SaveCourses;