import { List, Datagrid, TextField, EditButton, DeleteButton, CreateButton, ExportButton } from 'react-admin';

export const CategoryList = () => {
  return (
    <div>
      <List
        title="Categorias"
        pagination={false}
        actions={
          <div>
            <CreateButton label="Crear Categoria" />
            <ExportButton label="Exportar Categorias" />
          </div>
        }
      >
        <Datagrid>
          <TextField source="name" label="Nombre de la Categoría" />
          <EditButton label="Editar" />
          <DeleteButton label="Eliminar" />
        </Datagrid>
      </List>
    </div>
  );
};

export default CategoryList;
