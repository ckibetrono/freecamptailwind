"use client";

import { useState } from "react";
import { ArrowDown } from "./arrowDown";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectValue, setSelectValue] = useState("Option 1");

  const updateValue = (value: string) => {
    setSelectValue(value);
    setIsOpen(false);
  };

  return (
    <div className="h-screen Parent p-4">
      <h1>This is a title</h1>
      <h2>This is a subtitle</h2>
      <p className="text-base">This is a paragraph</p>
      <a href="#">This is an anchor</a>
      <div className="my-4">
        <button className="btn btn-primary">This is a primary button</button>
      </div>
      <div className="my-4">
        <button className="btn btn-secondary">
          This is a secondary button
        </button>
      </div>
      <div className="my-4">
        <button disabled className="btn btn-secondary">
          This is a disabled button
        </button>
      </div>
      <div>
        <input type="text" placeholder="E-mail"></input>
      </div>
      <div>
        <input disabled type="text" placeholder="E-mail"></input>
      </div>
      <div>
        <input type="date"></input>
      </div>
      <div>
        <input type="checkbox" id="checkbox"></input>
        <label className="checktext" htmlFor="checkbox">Checkbox</label>
      </div>
      <div className="flex items-start">
        <input type="checkbox" id="checkbox2"></input>
        <label className="checktext" htmlFor="checkbox2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel totam
          animi asperiores, aperiam, repellendus soluta quam odio earum
          dignissimos mollitia doloribus delectus inventore. Omnis animi labore
          iste aliquam inventore earum.
        </label>
      </div>
      <div>
        <select>
          <option>Opt 1</option>
          <option>Opt 2</option>
        </select>
      </div>

      <div className="Select">
        <div
          className="flex items-center justify-between child"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{selectValue}</span>
          <div className={isOpen ? "rotate-180 transition" : "rotate-0"}>
            <ArrowDown />
          </div>
        </div>
        {isOpen && (
          <div>
            <ul className="flex flex-col divide-y border-t">
              <li className="child" onClick={() => updateValue("Option 1")}>
                Opt 1
              </li>
              <li className="child" onClick={() => updateValue("Option 2")}>
                Opt 2
              </li>
              <li className="child" onClick={() => updateValue("Option 3")}>
                Opt 3
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
