import React from 'react';

async function getitems(featuredtags){
    var itemdata = [];
    var featured_tagdataset = [];
    if(featuredtags.length > 0){
        for (var i = 0; i < featuredtags.length; i++) {
            var row = featuredtags[i];
            var featurtag = {};
            featurtag.id = row.id;
            featurtag.featured_tag = row.featured_tag;
            var itemresult = await this.db.query("SELECT * FROM `items` WHERE status = 1 and FIND_IN_SET('"+ row.id +"' ,featured_tags) > 0");
            if(itemresult.length > 0){
                for(var l=0; l < itemresult.length; l++){
                    var itemrow = itemresult[l];
                    var item = {};
                    item.id = itemrow.id;
                    item.category_id = row.id;
                    item.name = itemrow.item_name;
                    itemdata.push(JSON.stringify(item));
                }                   
            }
            featurtag.tag_items = itemdata;
            featured_tagdataset.push(featurtag);
        }
        return featured_tagdataset;         
    }else{
        return null;
    }
}

this.app.get('/',async(request,response) =>{
    var itemlist = ''; 
    const featuretags = helper.getFeatureTag().then(function(featuredtags){
            itemlist = helper.getitems(featuredtags);

        });
    response.status(200).json({
                    status:200,
                    message: "success",
                    data:itemlist
            });

});