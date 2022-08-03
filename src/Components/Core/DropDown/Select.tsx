import React from "react";

function Select(props: any) {
  const { options, value, onClick, tittle, className } = props;
  return (
    <>
      <span className={"p-9 border"}>
        <span className="h6 text-grey2">{tittle}</span>
        <select value={value} onClick={onClick} className={className}>
          {options.length > 0 && (
            <>
              {options.map((item: any) => (
                <option>{item}</option>
              ))}
            </>
          )}
        </select>
      </span>
    </>
  );
}

export default Select;
