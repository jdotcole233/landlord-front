import DataTable from "react-data-table-component"

const PreviousTenant = ({
    tenantsColumns,
    data
}) => {
  return (
    <div className="mt-5">
        <DataTable 
        columns={tenantsColumns}
        data={data}
        pagination
        responsive
        striped
  />
    </div>
  );
};

export default PreviousTenant;