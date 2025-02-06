import Separator from '../components/Separator';
import { Outlet, NavLink } from 'react-router';

export default function AppLayout() {
  return (
    <>
      <div className="mx-8 sm:flex sm:justify-center">
        <div className=" max-w-5xl flex-1">
          <header className="font-mono py-4">
            <NavLink to="/">thoriqfarras.</NavLink>
          </header>
          <Separator />
          <Outlet />
          <Separator className="border-zinc-400" />
          <footer className="font-serif text-center my-4 text-zinc-400">
            Copyright Thoriq Farras - {new Date().getFullYear()}
          </footer>
        </div>
      </div>
    </>
  );
}
