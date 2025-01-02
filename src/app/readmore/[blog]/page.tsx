export default function DynamicFile({ params }: { params: { blog: string } }) {
  return (
    <>
      <h1>{params.blog}</h1>
      <div className="flex">
        <div>
          <h1>title</h1>
          <p>paragraph</p>
        </div>
        <div>image here</div>
      </div>
    </>
  );
}
