import { useAppSelector } from '../../redux/store';
import { Button } from '../Button';
import ContextWindow from '../ContextWindow';
import Search from '../Search';
import VariablesDropdown from '../VariablesDropdown';
import VariablesList from '../VariablesList';

interface IEditVariablesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EditVariablesModal = ({ isOpen, onClose }: IEditVariablesModalProps) => {
  const variablesCat1 = useAppSelector((state) => state.variables[1]);
  const variablesCat2 = useAppSelector((state) => state.variables[2]);
  const variablesCat3 = useAppSelector((state) => state.variables[3]);

  const contextWindowOpen = useAppSelector(
    (state) => state.contextWindow.isOpen
  );
  return (
    <div
      className={`fixed inset-0 flex justify-end z-50 transition-all duration-300 ${
        isOpen ? 'backdrop-blur-sm' : 'pointer-events-none'
      }`}
    >
      {/* Overlay for blur effect */}
      <div
        className={`absolute inset-0 bg-black transition-opacity ${
          isOpen ? 'opacity-50' : 'opacity-0'
        }`}
        onClick={onClose}
      ></div>

      {/* Modal panel */}
      <div
        className={`bg-black text-white w-4/5 sm:w-1/2 border-l border-border-secondary h-full p-6 shadow-lg transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Edit Variables</h2>
          <Button
            variant="quaternary"
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <img src="/x.svg" />
          </Button>
        </div>

        {/* Modal Content */}
        <div className="overflow-auto h-full">
          <div className="flex gap-2 mb-6">
            <Search className="flex-grow" />
            <Button>
              <div className="flex flex-row gap-2">
                <img className="filter invert brightness-0" src="/stars.svg" />
                <div>Autofill</div>
              </div>
            </Button>
            <Button className="border-lumi">
              <div className="flex flex-row gap-2">
                <img src="/reload.svg" />
                <div className="text-lumi">Rerun</div>
              </div>
            </Button>
          </div>

          <div className="w-full border border-border-secondary bg-bg-primary rounded-md">
            <VariablesList
              group={1}
              title={'Variables category 1'}
              variables={variablesCat1}
            />
            <VariablesList
              group={2}
              title={'Variables category 2'}
              variables={variablesCat2}
            />
            <VariablesList
              group={3}
              title={'Variables category 3'}
              variables={variablesCat3}
            />

            {contextWindowOpen && <ContextWindow />}
          </div>

          <VariablesDropdown>Primary Variables</VariablesDropdown>
          <VariablesDropdown>Secondary Variables</VariablesDropdown>
        </div>
      </div>
    </div>
  );
};

export default EditVariablesModal;
