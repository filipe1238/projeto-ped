import {RichTextField, useGetList} from "react-admin";
import {useMemo} from "react";
import {subDays, startOfDay} from 'date-fns';
import {Card, CardMedia, Grid} from "@mui/material";
import Box from "@mui/material/Box";


const Dashboard = () => {
    const aMonthAgo = useMemo(() => subDays(startOfDay(new Date()), 30), []);

    const {data: produtos} = useGetList<any>('produtos', {
        filter: {}, //
        sort: {field: 'dataCriacao', order: 'DESC'},
        pagination: {page: 1, perPage: 50},
    });

    return (
        <>
            <div>
                <h1>Produtos disponíveis  - {produtos?.length}</h1>
                <div>
                    <Grid container columnSpacing={4}>
                        {produtos?.map((produto: any) => (
                            <Grid item key={produto.id} xs={12} sm={6} md={2}>
                                <Card sx={{display: 'inline-block'}}>
                                    <CardMedia
                                        component="img"
                                        image={produto.foto ? produto.foto : `https://picsum.photos/500/300?random=${produto.id}`}
                                        alt=""
                                        sx={{maxWidth: '10em', maxHeight: '10em'}}
                                    />
                                </Card>
                                <h3>{produto.nome}</h3>
                                <TruncatedRichTextField record={produto} source="descricao"/>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        </>
    );
}

const TruncatedRichTextField = (x) => {
    const record = x.record;
    const source = x.source;
    const truncatedText = record[source]?.length > 50 ? record[source]?.substring(0, 150) + '...' : record[source];
    return <RichTextField record={{...record, [source]: truncatedText}} source={source}/>;
};

export default Dashboard;