import React from 'react';
import { domain } from './URLS';

export const DeleteGen = async ({ url, token, ParametroId, NameDel, setModalInfo, setIsModalOpen }) => {
    try {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let requestOptions = {
            method: "DELETE",
            headers: myHeaders,
            redirect: "follow",
        };

        const response = await fetch(`${domain}${url}/${ParametroId}/`, requestOptions);

        // Verifica si la respuesta es 204, en cuyo caso no hay contenido para parsear
        let data;
        if (response.status !== 204) {
            data = await response.json();
        } else {
            data = { msg: `Elemento ${NameDel} eliminado correctamente` };
        }

        if (response.status === 200 || response.status === 204) {
            setModalInfo({
                title: `${NameDel} eliminado`,
                description: data.msg,
                buttonLabel: "Ok",
                ButtonLabelTrue2: false,
                ButtonLabell: '',
                isSuccess: true,
                onConfirm: () => window.location.reload(),
            });
        } else if (response.status >= 400) {
            setModalInfo({
                title: "Error",
                description: data.msg,
                buttonLabel: "Ok",
                ButtonLabelTrue2: false,
                ButtonLabell: '',
                isSuccess: false,
                onConfirm: () => window.location.reload(),
            });
        }

        setIsModalOpen(true);

    } catch (error) {
        setModalInfo({
            title: "Error",
            description: `Error al eliminar ${NameDel}`,
            buttonLabel: "Ok",
            ButtonLabelTrue2: false,
            ButtonLabell: '',
            isSuccess: false,
            onConfirm: () => window.location.reload(),
        });
        setIsModalOpen(true);
    }
};