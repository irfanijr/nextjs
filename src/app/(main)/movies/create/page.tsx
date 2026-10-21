'use client';

import { SubmitForm } from "@/app/actions/movies";
import { useActionState } from "react";

export default function CreateMoviePage() {
  const [state, action, pending] = useActionState(SubmitForm, null);

  return (
    <form action={action}>
      <input name="title" type="text" />
      {state?.errors?.title && <p>{state.errors.title[0]}</p>}
      <button disabled={pending}>Kirim</button>
    </form>
  );
}
