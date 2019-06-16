import React from 'react';
import Layout from '../../layout/main'
import Card from '../../components/news/card'
//import { graphql } from 'gatsby'

import { getMainNews } from '../../api/dataAPI'

class Portfolio extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            news: [],
            loading: false,
            page: 1
        }
    }

    async loadData() {
        this.setState({loading:true});
        const res = await getMainNews(this.state.page);
        if(typeof res == 'object') {
            this.setState({
                news: this.state.news.concat(res),
                loading: false,
                page: this.state.page + 1
            })
            console.log(this.state.news, 'news object')
            console.log(this.state)
        }
    }

    async componentDidMount() {
        this.loadData();
    }

    render() {
        let template;

        if(this.state.loading) {
            template = <div>loading</div>
        } else {
            template = this.state.news.map((item, index) => <Card item={item} key={index} />)
        }

        return(
            <Layout>
                <div>
                    {template}
                </div>
            </Layout>
        )
    }
}

export default Portfolio;