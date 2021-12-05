import React, { useState } from "react";

interface ITest {
  name?: string;
}

interface ITestBadAss extends ITest {
  toggle: () => void;
}

const Test = ({ name = "Hello" }: ITestBadAss): JSX.Element => {
  const [on, setOn] = useState<boolean>(true);
  const out = on ? <div>Hello {name}</div> : <div />;
  return out;
};

export default Test;
