'use client';

import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { LogOut } from 'lucide-react';

export default function SignOutButton() {
  const router = useRouter();

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push('/admin/login');
    router.refresh();
  };

  return (
    <button
      onClick={handleSignOut}
      className="flex items-center gap-2 w-full px-4 py-2.5 rounded-xl text-white/50 hover:text-white hover:bg-white/5 transition-all duration-200 text-sm font-medium"
    >
      <LogOut className="w-4 h-4" />
      Sign Out
    </button>
  );
}
