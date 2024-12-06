import Proyecto from "@/types/Proyecto";
import RazonSocial from "../types/RazonSocial";
import UnidadDeNegocio from "../types/UnidadDeNegocio";

const storagePrefix = "arquiplanner_";

const storage = {
  getToken: () => {
    return JSON.parse(
      window.localStorage.getItem(`${storagePrefix}token`) as string,
    );
  },
  setToken: (token: string) => {
    window.localStorage.setItem(`${storagePrefix}token`, JSON.stringify(token));
  },
  clearToken: () => {
    window.localStorage.removeItem(`${storagePrefix}token`);
  },
  setRazonesSociales: (razonesSociales: RazonSocial[]) => {
    window.localStorage.setItem(
      `${storagePrefix}razonesSociales`,
      JSON.stringify(razonesSociales),
    );
  },
  getRazonesSociales: () => {
    return JSON.parse(
      window.localStorage.getItem(`${storagePrefix}razonesSociales`) as string,
    );
  },
  setUnidadesDeNegocio: (unidadesDeNegocio: UnidadDeNegocio[]) => {
    window.localStorage.setItem(
      `${storagePrefix}unidadesDeNegocio`,
      JSON.stringify(unidadesDeNegocio),
    );
  },

  getUnidadesDeNegocio: () => {
    return JSON.parse(
      window.localStorage.getItem(
        `${storagePrefix}unidadesDeNegocio`,
      ) as string,
    );
  },
  setProyectos: (proyectos: Proyecto[]) => {
    window.localStorage.setItem(
      `${storagePrefix}proyectos`,
      JSON.stringify(proyectos),
    );
  },

  getProyectos: () => {
    return JSON.parse(
      window.localStorage.getItem(`${storagePrefix}proyectos`) as string,
    );
  },
};

export default storage;
