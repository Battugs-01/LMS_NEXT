const CourseIdPage = ({
  params,
}: {
  params: {
    courseId: string;
  };
}) => {
  console.log(params, "params");
  return (
    <div>
      <h1>Course ID : {params?.courseId}</h1>
    </div>
  );
};
export default CourseIdPage;
