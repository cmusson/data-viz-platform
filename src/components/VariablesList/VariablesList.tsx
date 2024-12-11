import { IVariable, IVariables } from '../../redux/variablesSlice';
import Variable from '../Variable/Variable';

interface IVariablesList {
  variables: IVariable[];
  title: string;
  group: keyof IVariables;
}

const VariablesList = ({ variables, title, group }: IVariablesList) => {
  return (
    <div className="p-4">
      <div className="mb-4">{title}</div>
      <div className="flex items-center flex-wrap gap-4">
        {variables.map((variable, index) => (
          <Variable index={index} group={group} selected={variable.selected}>
            {variable.name}
          </Variable>
        ))}
      </div>
    </div>
  );
};

export default VariablesList;
