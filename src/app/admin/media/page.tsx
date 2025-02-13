
import { permanentRedirect } from 'next/navigation'
 
async function MediaPage() {
 
  permanentRedirect("/admin/media/general")
}


export default MediaPage