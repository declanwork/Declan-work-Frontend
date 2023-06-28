import { useState } from 'react'
import { Switch } from '@headlessui/react'


export default function Toggle() {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className="w-fit mt-1">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-[#00360C]' : 'bg-[#00360C]'}
          relative inline-flex h-[34px] w-[70px] float-right shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[28px] w-[28px] transform rounded-full bg-[#00EF7C] shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  )
}
