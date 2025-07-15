const ListItem = (props) => {
  return (
    <p className="text-4xl w-12/12 flex justify-between pt-3 rounded font-semibold shadow-lg bg-emerald-100 mb-4">
      <span
        className="flex
             justify-center w-11/12"
      >
        {props.item}
      </span>{" "}
      <span
        className="flex
             justify-center w-1/12 "
      >
        {props.children}
      </span>
    </p>
  );
};

export default ListItem;