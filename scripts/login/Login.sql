CREATE OR REPLACE FUNCTION public.login(
    pEmail public.usuario.email%TYPE,
    pSenha public.usuario.senha%TYPE
)

    RETURNS TABLE(
        "id" public.usuario.id%TYPE,
        "nomeRazaoSocial" public.usuario.nomeRazaoSocial%TYPE,
        "email" public.usuario.email%TYPE
    ) AS $$

    /*
        Documentação
        Arquivo Fonte.....: Login.sql
        Objetivo..........: Fazer login
        Autor.............: Thiago Moreira
        Data..............: 22/07/2018
        Ex................:
            SELECT * FROM public.login('email', 'senha');
    */

    BEGIN

        RETURN QUERY
            SELECT  id,
                    nomeRazaoSocial AS "nome",
                    email
                FROM public.usuario
                WHERE email ILIKE pEmail
                    AND senha LIKE pSenha;
    END;
$$ 
LANGUAGE plpgsql;

--------------------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION public.refazerLogin(
    pId public.usuario.id%TYPE,
    pEmail public.usuario.email%TYPE
)

    RETURNS TABLE(
        "id" public.usuario.id%TYPE,
        "nomeRazaoSocial" public.usuario.nomeRazaoSocial%TYPE,
        "email" public.usuario.email%TYPE
    ) AS $$

    /*
        Documentação
        Arquivo Fonte.....: Login.sql
        Objetivo..........: Refazer login
        Autor.............: Thiago Moreira
        Data..............: 12/08/2018
        Ex................:
            SELECT * FROM public.refazerLogin('email', 'nomeRazaoSocial');
    */

    BEGIN

        RETURN QUERY
            SELECT  id,
                    nomeRazaoSocial AS "nomeRazaoSocial",
                    email
                FROM public.usuario
                WHERE id = pId
                    AND email ILIKE pEmail;
    END;
$$ 
LANGUAGE plpgsql;

--------------------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION public.esqueceuSenha(
    pEmail public.usuario.email%TYPE,
    pCpfCnpj public.usuario.cpfCnpj%TYPE
)

    RETURNS TABLE(
        "id" public.usuario.id%TYPE,
        "nomeRazaoSocial" public.usuario.nomeRazaoSocial%TYPE,
        "email" public.usuario.email%TYPE
    ) AS $$

    /*
        Documentação
        Arquivo Fonte.....: Login.sql
        Objetivo..........: Recuperar dados para um usuario que esqueceu sua senha
        Autor.............: Thiago Moreira
        Data..............: 12/08/2018
        Ex................:
            SELECT * FROM public.esqueceuSenha('email', 'cpfCnpj');
    */

    BEGIN

        RETURN QUERY

            SELECT  id,
                    nomeRazaoSocial AS "nomeRazaoSocial",
                    email
                FROM public.usuario
                WHERE 
                    CASE WHEN pEmail IS NOT NULL THEN
                        email ILIKE pEmail
                    ELSE THEN
                        cpfCnpj = pCpfCnpj
                    END

    END;
$$ 
LANGUAGE plpgsql;

--------------------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION public.alterarSenha(
    pId public.usuario.id%TYPE,
    pEmail public.usuario.email%TYPE,
    pNovaSenha public.usuario.senha%TYPE
)

    RETURNS VOID AS $$

    /*
        Documentação
        Arquivo Fonte.....: Login.sql
        Objetivo..........: Alterar senha de um usuario
        Autor.............: Thiago Moreira
        Data..............: 12/08/2018
        Ex................:
            SELECT * FROM public.alterarSenha('email', 'senha');
    */

    BEGIN

        UPDATE public.usuario SET
            senha = pNovaSenha
        WHERE id = pId
            AND email ILIKE pEmail;

    END;
$$ 
LANGUAGE plpgsql;

--------------------------------------------------------------------------------------