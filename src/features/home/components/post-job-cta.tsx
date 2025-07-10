import PostJobButton from "@/components/post-job-button";

function PostJobCTA() {
  return (
    <div className="p-6 rounded-xl flex flex-col bg-beige-3 gap-4 w-full md:flex-row md:justify-between md:items-center">
      <p className="text-xl font-semibold text-beige-12">
        Hiring? Connect with 200k+ prompt-engineering professionals
      </p>
      <PostJobButton className="w-full md:w-fit"/>
    </div>
  );
}

export default PostJobCTA;
