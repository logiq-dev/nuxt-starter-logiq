type ToastVariant = "success" | "error";

type ToastPayload = {
  id: number;
  title: string;
  message?: string;
  variant: ToastVariant;
  duration: number;
};

const toastState = () => useState<ToastPayload[]>("app-toast-items", () => []);

export function useToast() {
  const toasts = toastState();

  const remove = (id: number) => {
    toasts.value = toasts.value.filter(toast => toast.id !== id);
  };

  const push = ({
    title,
    message,
    variant = "success",
    duration = 3500,
  }: {
    title: string;
    message?: string;
    variant?: ToastVariant;
    duration?: number;
  }) => {
    const id = Date.now() + Math.floor(Math.random() * 1000);

    toasts.value = [
      ...toasts.value,
      {
        id,
        title,
        message,
        variant,
        duration,
      },
    ];

    if (duration > 0) {
      setTimeout(() => remove(id), duration);
    }
  };

  return {
    toasts,
    push,
    remove,
  };
}
