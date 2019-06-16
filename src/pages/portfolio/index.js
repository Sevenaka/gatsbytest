import React from 'react';
import Layout from '../../layout/main'
import Card from '../../components/news/card'
import InfiniteScroll from 'react-infinite-scroller'
//import { graphql } from 'gatsby'
import { getMainNews } from '../../api/dataAPI'

class Portfolio extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            news: [],
            loading: false,
            page: 1,
            hasMoreItems: true
        }
    }

    async loadData(page) {
        //this.setState({loading:true});

        try {
            if(!this.state.loading) {
                this.setState({loading: true})
                const res = await getMainNews(page);
                if(typeof res == 'object' && res.length > 0) {

                    let news = this.state.news;
                    res.map((item) => {
                        news.push(item);
                    });
                    
                    if(res.length > 1) {
                        this.setState({
                            news: news,
                            loading: false
                        });
                    } else {
                        
                    }

                    console.log(this.state.news, 'news object')
                    //console.log(this.state)
                } else {
                    this.setState({
                        hasMoreItems: false
                    });
                }
            }
        } catch(error) {
            console.error(error);
        }
    }

    async componentDidMount() {
        this.loadData(1);
    }

    render() {
        let items = [];
        this.state.news.map((item, index) => {
            items.push(
                <Card item={item} key={index} />
            )
        })

        const loader = <div className="loader">Loading ...</div>

        return(
            <Layout>
                <div>
                    {
                    <InfiniteScroll
                        pageStart={0}
                        loadMore={this.loadData.bind(this)}
                        hasMore={this.state.hasMoreItems}
                        loader={loader}>
                            
                     
                                {items}
         

                    </InfiniteScroll>}
                </div>
            </Layout>
        )
    }
}

export default Portfolio;