CREATE OR REPLACE FUNCTION public.cadastrarConsumos(
    pConsumos JSON
)

    RETURNS VOID AS $$

    /*
        Documentação
        Arquivo Fonte.....: Consumo.sql
        Objetivo..........: Cadastrar os consumos de energia
        Autor.............: Thiago Moreira
        Data..............: 22/07/2018
        Ex................:
            SELECT * FROM public.cadastrarConsumos('[]');
    */

    BEGIN

    INSERT INTO public.consumo(quantidade, data, idUsuario)
        SELECT  x."quantidade",
                x."data",
                x."idUsuario" 
            FROM json_to_recordset(pConsumos)
                AS x(
                    "quantidade" NUMERIC(8, 2),
                    "data" TIMESTAMP WITHOUt TIME ZONE,
                    "idUsuario" INTEGER
                );
    
    END;
$$ 
LANGUAGE plpgsql;
