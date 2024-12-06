import { useQuery } from "react-query";
import { axios } from "@/lib/axios";
import { useAuth } from "@/lib/auth";

export const getUserHasPermissionOnFunction = (
  userId: string,
  functionId: string
): Promise<any[]> => {
  let url = `/misc/usuario-tiene-permiso?`;

  if (userId) {
    url += `&userid=${userId}`;
  }
  if (userId) {
    url += `&functionId=${functionId}`;
  }
  return axios.get(url);
};

export const useCuentasPorPagar = (config = {}, functionId: string) => {
  const { user } = useAuth();
  const userId = user?.userid;

  return useQuery<any[], Error>({
    ...config,
    queryKey: ["cuentas-por-pagar"],
    queryFn: () => getUserHasPermissionOnFunction(userId ?? "", functionId),
    enabled: !!userId && !!functionId,
  });
};
