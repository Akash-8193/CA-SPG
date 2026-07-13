import { redirect } from 'next/navigation';

export default function AdminIndexPage() {
  // Automatically redirect from /admin to /admin/contacts
  redirect('/admin/contacts');
}
