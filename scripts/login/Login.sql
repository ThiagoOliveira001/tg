CREATE OR REPLACE FUNCTION public.login(
    pEmail public.usuario.email%TYPE,
    pSenha public.usuario.senha%TYPE
)

    RETURNS TABLE(
        "id" public.usuario.id%TYPE,
        "nome" public.usuario.nomeRazaoSocial%TYPE
    ) AS $$

    /*
        Documentação
        Arquivo Fonte.....: Login.sql
        Objetivo..........: Buscar um usuario
        Autor.............: Thiago Moreira
        Data..............: 22/07/2018
        Ex................:
            SELECT * FROM public.login('email', 'senha');
    */

    BEGIN

        RETURN QUERY
            SELECT  id,      
                    nomeRazaoSocial AS "nome",
                FROM public.usuario
                WHERE email ILIKE pEmail
                    AND senha ILIKE pSenha;
    END;
$$ 
LANGUAGE plpgsql;

--------------------------------------------------------------------------------------