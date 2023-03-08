import * as Dialog from "@radix-ui/react-dialog";
import { Plus } from "phosphor-react";

import logoImage from "../assets/logo.svg";
import { useState } from "react";

export function Header() {
  return (
    <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <img src={logoImage} alt="Habits" />

      <Dialog.Root>
        <Dialog.Trigger
          type="button"
          className="flex items-center gap-3 border border-violet-500 font-semibold rounded-lg px-6 py-4 hover:border-violet-300"
        >
          <Plus size={20} className="text-violet-500" />
          Novo hábito
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />

          <Dialog.Content className="absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-/">
            Conteúdo do modal
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
