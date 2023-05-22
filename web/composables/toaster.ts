import { Toast } from '~/types/Toaster';

const toastList = ref([] as Toast[]);
let toastId = 0;
export const useToaster = () => {
  const generateId = () => toastId++;

  const createToast = (toast: Omit<Toast, 'id'>) => {
    const id = generateId();
    const newToast = { ...toast, id };
    toastList.value.push(newToast);
  };

  const deleteToast = (toastId: number) => {
    const index = toastList.value.findIndex((toast) => toast.id === toastId);
    if (index > -1) {
      toastList.value.splice(index, 1);
    }
  };

  return { toasts: toastList, generateId, createToast, deleteToast };
};
