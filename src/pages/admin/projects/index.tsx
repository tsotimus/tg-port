import { Button } from "@/components/ui/button";
import Link from "next/link";

const MyProjectsPage = () => {
  return (
    <div>
      <h1>My Projects</h1>
      <Link href="/admin/projects/create">
        <Button>Create new</Button>
      </Link>
    </div>
  );
};

export default MyProjectsPage;
