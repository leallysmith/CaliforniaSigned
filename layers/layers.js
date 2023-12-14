var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleImagery_1 = new ol.layer.Tile({
            'title': 'Google Imagery',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRIGray_2 = new ol.layer.Tile({
            'title': 'ESRI Gray',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OpenStreetMap_3 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CoalClosureEnergyCommunities_4 = new ol.format.GeoJSON();
var features_CoalClosureEnergyCommunities_4 = format_CoalClosureEnergyCommunities_4.readFeatures(json_CoalClosureEnergyCommunities_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoalClosureEnergyCommunities_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoalClosureEnergyCommunities_4.addFeatures(features_CoalClosureEnergyCommunities_4);
var lyr_CoalClosureEnergyCommunities_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoalClosureEnergyCommunities_4, 
                style: style_CoalClosureEnergyCommunities_4,
                interactive: false,
    title: 'Coal Closure Energy Communities<br />\
    <img src="styles/legend/CoalClosureEnergyCommunities_4_0.png" /> Census tract directly adjoining a census tract with a coal closure<br />\
    <img src="styles/legend/CoalClosureEnergyCommunities_4_1.png" /> Census tract with a coal closure<br />'
        });
var format_MSANonMSAsthatareEnergyCommunities_5 = new ol.format.GeoJSON();
var features_MSANonMSAsthatareEnergyCommunities_5 = format_MSANonMSAsthatareEnergyCommunities_5.readFeatures(json_MSANonMSAsthatareEnergyCommunities_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSANonMSAsthatareEnergyCommunities_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSANonMSAsthatareEnergyCommunities_5.addFeatures(features_MSANonMSAsthatareEnergyCommunities_5);
var lyr_MSANonMSAsthatareEnergyCommunities_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MSANonMSAsthatareEnergyCommunities_5, 
                style: style_MSANonMSAsthatareEnergyCommunities_5,
                interactive: false,
    title: 'MSA/Non-MSAs that are Energy Communities<br />\
    <img src="styles/legend/MSANonMSAsthatareEnergyCommunities_5_0.png" /> is an energy community, as it meets both the Fossil Fuel Employment (FFE) threshold and the unemployment rate requirement<br />'
        });
var format_AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6 = new ol.format.GeoJSON();
var features_AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6 = format_AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6.readFeatures(json_AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6.addFeatures(features_AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6);
var lyr_AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6, 
                style: style_AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6,
                interactive: false,
                title: '<img src="styles/legend/AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6.png" /> Additional Selection Criteria Geographic Option 2 Persistent Poverty County'
            });
var format_AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7 = new ol.format.GeoJSON();
var features_AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7 = format_AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7.readFeatures(json_AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7.addFeatures(features_AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7);
var lyr_AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7, 
                style: style_AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7,
                interactive: false,
                title: '<img src="styles/legend/AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7.png" /> Additional Selection Criteria Geographic Option 1 CEJST Energy'
            });
var format_Category1Eligibility_8 = new ol.format.GeoJSON();
var features_Category1Eligibility_8 = format_Category1Eligibility_8.readFeatures(json_Category1Eligibility_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Category1Eligibility_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Category1Eligibility_8.addFeatures(features_Category1Eligibility_8);
var lyr_Category1Eligibility_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Category1Eligibility_8, 
                style: style_Category1Eligibility_8,
                interactive: false,
                title: '<img src="styles/legend/Category1Eligibility_8.png" /> Category 1 Eligibility'
            });
var format_SDGESubstations_9 = new ol.format.GeoJSON();
var features_SDGESubstations_9 = format_SDGESubstations_9.readFeatures(json_SDGESubstations_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDGESubstations_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDGESubstations_9.addFeatures(features_SDGESubstations_9);
var lyr_SDGESubstations_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SDGESubstations_9, 
                style: style_SDGESubstations_9,
                interactive: true,
                title: '<img src="styles/legend/SDGESubstations_9.png" /> SDG&E Substations'
            });
var format_PGESubstations_10 = new ol.format.GeoJSON();
var features_PGESubstations_10 = format_PGESubstations_10.readFeatures(json_PGESubstations_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PGESubstations_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PGESubstations_10.addFeatures(features_PGESubstations_10);
var lyr_PGESubstations_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PGESubstations_10, 
                style: style_PGESubstations_10,
                interactive: true,
                title: '<img src="styles/legend/PGESubstations_10.png" /> PG&E Substations'
            });
var format_SCESubstations_11 = new ol.format.GeoJSON();
var features_SCESubstations_11 = format_SCESubstations_11.readFeatures(json_SCESubstations_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCESubstations_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCESubstations_11.addFeatures(features_SCESubstations_11);
var lyr_SCESubstations_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SCESubstations_11, 
                style: style_SCESubstations_11,
                interactive: true,
                title: '<img src="styles/legend/SCESubstations_11.png" /> SCE Substations'
            });
var format_CaliforniaUtilities_12 = new ol.format.GeoJSON();
var features_CaliforniaUtilities_12 = format_CaliforniaUtilities_12.readFeatures(json_CaliforniaUtilities_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CaliforniaUtilities_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CaliforniaUtilities_12.addFeatures(features_CaliforniaUtilities_12);
var lyr_CaliforniaUtilities_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CaliforniaUtilities_12, 
                style: style_CaliforniaUtilities_12,
                interactive: false,
    title: 'California Utilities<br />\
    <img src="styles/legend/CaliforniaUtilities_12_0.png" /> PACIFIC GAS & ELECTRIC CO.<br />\
    <img src="styles/legend/CaliforniaUtilities_12_1.png" /> SAN DIEGO GAS & ELECTRIC CO<br />\
    <img src="styles/legend/CaliforniaUtilities_12_2.png" /> SOUTHERN CALIFORNIA EDISON CO<br />'
        });
var format_California_13 = new ol.format.GeoJSON();
var features_California_13 = format_California_13.readFeatures(json_California_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_California_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_California_13.addFeatures(features_California_13);
var lyr_California_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_California_13, 
                style: style_California_13,
                interactive: false,
                title: '<img src="styles/legend/California_13.png" /> California'
            });
var format_CaliforniaCounties_14 = new ol.format.GeoJSON();
var features_CaliforniaCounties_14 = format_CaliforniaCounties_14.readFeatures(json_CaliforniaCounties_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CaliforniaCounties_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CaliforniaCounties_14.addFeatures(features_CaliforniaCounties_14);
var lyr_CaliforniaCounties_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CaliforniaCounties_14, 
                style: style_CaliforniaCounties_14,
                interactive: false,
                title: '<img src="styles/legend/CaliforniaCounties_14.png" /> California Counties'
            });
var format_CaliforniaCountyNames_15 = new ol.format.GeoJSON();
var features_CaliforniaCountyNames_15 = format_CaliforniaCountyNames_15.readFeatures(json_CaliforniaCountyNames_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CaliforniaCountyNames_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CaliforniaCountyNames_15.addFeatures(features_CaliforniaCountyNames_15);
var lyr_CaliforniaCountyNames_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CaliforniaCountyNames_15, 
                style: style_CaliforniaCountyNames_15,
                interactive: false,
                title: '<img src="styles/legend/CaliforniaCountyNames_15.png" /> California County Names'
            });
var format_SignedParcelslastupdated111523_16 = new ol.format.GeoJSON();
var features_SignedParcelslastupdated111523_16 = format_SignedParcelslastupdated111523_16.readFeatures(json_SignedParcelslastupdated111523_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SignedParcelslastupdated111523_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SignedParcelslastupdated111523_16.addFeatures(features_SignedParcelslastupdated111523_16);
var lyr_SignedParcelslastupdated111523_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SignedParcelslastupdated111523_16, 
                style: style_SignedParcelslastupdated111523_16,
                interactive: true,
                title: '<img src="styles/legend/SignedParcelslastupdated111523_16.png" /> Signed Parcels (last updated 11/15/23)'
            });
var format_SignedParcelslastupdated111523_17 = new ol.format.GeoJSON();
var features_SignedParcelslastupdated111523_17 = format_SignedParcelslastupdated111523_17.readFeatures(json_SignedParcelslastupdated111523_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SignedParcelslastupdated111523_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SignedParcelslastupdated111523_17.addFeatures(features_SignedParcelslastupdated111523_17);cluster_SignedParcelslastupdated111523_17 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_SignedParcelslastupdated111523_17
});
var lyr_SignedParcelslastupdated111523_17 = new ol.layer.Vector({
                declutter: true,
                source:cluster_SignedParcelslastupdated111523_17, 
                style: style_SignedParcelslastupdated111523_17,
                interactive: false,
                title: '<img src="styles/legend/SignedParcelslastupdated111523_17.png" /> Signed Parcels (last updated 11/15/23)'
            });
var format_ParcelNames_18 = new ol.format.GeoJSON();
var features_ParcelNames_18 = format_ParcelNames_18.readFeatures(json_ParcelNames_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParcelNames_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParcelNames_18.addFeatures(features_ParcelNames_18);
var lyr_ParcelNames_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ParcelNames_18, 
                style: style_ParcelNames_18,
                interactive: false,
                title: '<img src="styles/legend/ParcelNames_18.png" /> Parcel Names'
            });
var group_CaliforniaSubstations = new ol.layer.Group({
                                layers: [lyr_SDGESubstations_9,lyr_PGESubstations_10,lyr_SCESubstations_11,],
                                title: "California Substations"});
var group_48eLowIncomeCredits = new ol.layer.Group({
                                layers: [lyr_AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6,lyr_AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7,lyr_Category1Eligibility_8,],
                                title: "48e Low Income Credits"});
var group_EnergyCommunities = new ol.layer.Group({
                                layers: [lyr_CoalClosureEnergyCommunities_4,lyr_MSANonMSAsthatareEnergyCommunities_5,],
                                title: "Energy Communities"});
var group_Basemaps = new ol.layer.Group({
                                layers: [lyr_GoogleTerrain_0,lyr_GoogleImagery_1,lyr_ESRIGray_2,lyr_OpenStreetMap_3,],
                                title: "Basemaps"});

lyr_GoogleTerrain_0.setVisible(true);lyr_GoogleImagery_1.setVisible(true);lyr_ESRIGray_2.setVisible(true);lyr_OpenStreetMap_3.setVisible(true);lyr_CoalClosureEnergyCommunities_4.setVisible(true);lyr_MSANonMSAsthatareEnergyCommunities_5.setVisible(true);lyr_AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6.setVisible(true);lyr_AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7.setVisible(true);lyr_Category1Eligibility_8.setVisible(true);lyr_SDGESubstations_9.setVisible(true);lyr_PGESubstations_10.setVisible(true);lyr_SCESubstations_11.setVisible(true);lyr_CaliforniaUtilities_12.setVisible(true);lyr_California_13.setVisible(true);lyr_CaliforniaCounties_14.setVisible(true);lyr_CaliforniaCountyNames_15.setVisible(false);lyr_SignedParcelslastupdated111523_16.setVisible(true);lyr_SignedParcelslastupdated111523_17.setVisible(true);lyr_ParcelNames_18.setVisible(false);
var layersList = [group_Basemaps,group_EnergyCommunities,group_48eLowIncomeCredits,group_CaliforniaSubstations,lyr_CaliforniaUtilities_12,lyr_California_13,lyr_CaliforniaCounties_14,lyr_CaliforniaCountyNames_15,lyr_SignedParcelslastupdated111523_16,lyr_SignedParcelslastupdated111523_17,lyr_ParcelNames_18];
lyr_CoalClosureEnergyCommunities_4.set('fieldAliases', {'objectid': 'OBJECTID', 'affgeoid_tract_2020': 'AFFGEOID_Tract_2020', 'fipstate_2020': 'fipstate_2020', 'fipcounty_2020': 'fipcounty_2020', 'geoid_county_2020': 'geoid_county_2020', 'fiptract_2020': 'fiptract_2020', 'geoid_tract_2020': 'geoid_tract_2020', 'mine_qual': 'Mine_Qual', 'generator_qual': 'Generator_Qual', 'neighbor_qual': 'Neighbor_Qual', 'state_name': 'State_Name', 'county_name': 'County_Name', 'censustract_name': 'CensusTract_Name', 'mine_closure': 'Mine_Closure', 'generator_closure': 'Generator_Closure', 'adjacent_to_closure': 'Adjacent_to_Closure', 'tract_status': 'Tract_Status', 'date_last_update': 'date_last_update', 'dataset_version': 'dataset_version', 'record_added': 'record_added', 'symbol': 'Symbol', 'SHAPE__Length': 'SHAPE__Length', 'SHAPE__Area': 'SHAPE__Area', });
lyr_MSANonMSAsthatareEnergyCommunities_5.set('fieldAliases', {'objectid_1': 'OBJECTID_1', 'objectid': 'ObjectID', 'affgeoid_cty_2020': 'AFFGEOID_COUNTY_2020', 'fipstate_2020': 'fipstate_2020', 'fipscty_2020': 'fipscounty_2020', 'geoid_cty_2020': 'geoid_county_2020', 'county_name_2020': 'county_name_2020', 'state_name': 'state_name', 'msa_area_id': 'MSA_area_ID_2020', 'msa_area_name': 'MSA_area_name_2020', 'ffe_ind_qual': 'ffe_ind_qual', 'ec_ind_qual': 'ec_ind_qual', 'msa_qual': 'msa_qual', 'fee_qual_status': 'FEE_qual_status', 'ec_qual_status': 'EC_qual_status', 'label_fee': 'Label_FEE', 'label_ec': 'Label_EC', 'msa_nmsa_label': 'Label_MSA_NMSA', 'date_last_update': 'date_last_update', 'dataset_version': 'dataset_version', 'date_record_added': 'date_record_added', 'globalid': 'globalid', 'SHAPE__Length': 'SHAPE__Length', 'SHAPE__Area': 'SHAPE__Area', });
lyr_AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6.set('fieldAliases', {'GEOID': 'GEOID', 'NAME': 'NAME', 'Persistent': 'Persistent', 'Persiste_1': 'Persiste_1', 'Persiste_2': 'Persiste_2', 'Persiste_3': 'Persiste_3', 'ObjectId': 'ObjectId', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7.set('fieldAliases', {'GEOID10': 'GEOID10', 'SF': 'SF', 'CF': 'CF', 'N_ENY': 'N_ENY', 'ObjectId': 'ObjectId', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_Category1Eligibility_8.set('fieldAliases', {'CensusTrac': 'CensusTrac', 'NMTCQualif': 'NMTCQualif', 'StateName': 'StateName', 'CountyName': 'CountyName', 'Vintage': 'Vintage', 'CountyFIPS': 'CountyFIPS', 'ObjectId': 'ObjectId', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_SDGESubstations_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CONSTRUCTIONSTATUS': 'CONSTRUCTIONSTATUS', 'NAME': 'NAME', 'FACILITYID': 'FACILITYID', 'SUBSTATIONTYPE_CODE': 'SUBSTATIONTYPE_CODE', 'LOCATION': 'LOCATION', 'DISTRICT': 'DISTRICT', 'SDE_OBJECTID': 'SDE_OBJECTID', 'GLOBALID': 'GLOBALID', 'IMAP_VOLTAGE': 'IMAP_VOLTAGE', 'IMAP_LOAD_PROFILE': 'IMAP_LOAD_PROFILE', 'SUBSTATIONTYPE': 'SUBSTATIONTYPE', 'RESTRICTED': 'RESTRICTED', 'EXIST_GEN': 'EXIST_GEN', 'QUE_GEN': 'QUE_GEN', 'TOT_GEN': 'TOT_GEN', 'PROJ_LOAD': 'PROJ_LOAD', 'PENETRATION': 'PENETRATION', });
lyr_PGESubstations_10.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'SUBNAME': 'Substation Name', 'SUBSTATIONID': 'Substation ID', 'MIN_KV': 'Nominal Circuit Voltage (kV)', 'NUMBANKS': 'NUMBANKS', 'REDACTED': 'REDACTED', 'OBJECTID': 'OBJECTID', 'UNGROUNDEDBANKS': 'UnGrounded Banks', 'parent': 'parent', });
lyr_SCESubstations_11.set('fieldAliases', {'subst_id': 'SUBST_ID', 'sub_name': 'SUB_NAME', 'sys_name': 'SYS_NAME', 'sub_type': 'SUB_TYPE', 'substation_voltage': 'SUBSTATION_VOLTAGE', 'existing_gen': 'EXISTING_GEN', 'queued_gen': 'QUEUED_GEN', 'total_gen': 'TOTAL_GEN', 'projected_load': 'PROJECTED_LOAD', 'penetration_level': 'PENETRATION_LEVEL', 'max_remain_cap': 'MAX_REMAIN_CAP', 'note': 'NOTE', 'objectid': 'OBJECTID', });
lyr_CaliforniaUtilities_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'NAME': 'NAME', 'ADDRESS': 'ADDRESS', 'CITY': 'CITY', 'STATE': 'STATE', 'ZIP': 'ZIP', 'TELEPHONE': 'TELEPHONE', 'TYPE': 'TYPE', 'COUNTRY': 'COUNTRY', 'NAICS_CODE': 'NAICS_CODE', 'NAICS_DESC': 'NAICS_DESC', 'SOURCE': 'SOURCE', 'SOURCEDATE': 'SOURCEDATE', 'VAL_METHOD': 'VAL_METHOD', 'VAL_DATE': 'VAL_DATE', 'WEBSITE': 'WEBSITE', 'REGULATED': 'REGULATED', 'CNTRL_AREA': 'CNTRL_AREA', 'PLAN_AREA': 'PLAN_AREA', 'HOLDING_CO': 'HOLDING_CO', 'SUMMR_PEAK': 'SUMMR_PEAK', 'WINTR_PEAK': 'WINTR_PEAK', 'SUMMER_CAP': 'SUMMER_CAP', 'WINTER_CAP': 'WINTER_CAP', 'NET_GEN': 'NET_GEN', 'PURCHASED': 'PURCHASED', 'NET_EX': 'NET_EX', 'RETAIL_MWH': 'RETAIL_MWH', 'WSALE_MWH': 'WSALE_MWH', 'TOTAL_MWH': 'TOTAL_MWH', 'TRANS_MWH': 'TRANS_MWH', 'CUSTOMERS': 'CUSTOMERS', 'YEAR': 'YEAR', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_California_13.set('fieldAliases', {'STATE': 'STATE', 'NAME': 'NAME', 'FIPS': 'FIPS', 'LON': 'LON', 'LAT': 'LAT', });
lyr_CaliforniaCounties_14.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'COUNTYNS': 'COUNTYNS', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'CLASSFP': 'CLASSFP', 'MTFCC': 'MTFCC', 'CSAFP': 'CSAFP', 'CBSAFP': 'CBSAFP', 'METDIVFP': 'METDIVFP', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', });
lyr_CaliforniaCountyNames_15.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'COUNTYNS': 'COUNTYNS', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'CLASSFP': 'CLASSFP', 'MTFCC': 'MTFCC', 'CSAFP': 'CSAFP', 'CBSAFP': 'CBSAFP', 'METDIVFP': 'METDIVFP', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', });
lyr_SignedParcelslastupdated111523_16.set('fieldAliases', {'id': 'id', 'Parcel': 'Parcel', 'owner': 'owner', 'bldblAcr': 'bldblAcr', 'LotSize': 'LotSize', 'Utility': 'Utility', });
lyr_SignedParcelslastupdated111523_17.set('fieldAliases', {'id': 'id', 'Parcel': 'Parcel', 'owner': 'owner', 'bldblAcr': 'bldblAcr', 'LotSize': 'LotSize', 'Utility': 'Utility', });
lyr_ParcelNames_18.set('fieldAliases', {'id': 'id', 'Parcel': 'Parcel', 'owner': 'owner', 'bldblAcr': 'bldblAcr', 'LotSize': 'LotSize', 'Utility': 'Utility', });
lyr_CoalClosureEnergyCommunities_4.set('fieldImages', {'objectid': 'TextEdit', 'affgeoid_tract_2020': 'TextEdit', 'fipstate_2020': 'TextEdit', 'fipcounty_2020': 'TextEdit', 'geoid_county_2020': 'TextEdit', 'fiptract_2020': 'TextEdit', 'geoid_tract_2020': 'TextEdit', 'mine_qual': 'TextEdit', 'generator_qual': 'TextEdit', 'neighbor_qual': 'TextEdit', 'state_name': 'TextEdit', 'county_name': 'TextEdit', 'censustract_name': 'TextEdit', 'mine_closure': 'TextEdit', 'generator_closure': 'TextEdit', 'adjacent_to_closure': 'TextEdit', 'tract_status': 'TextEdit', 'date_last_update': 'DateTime', 'dataset_version': 'TextEdit', 'record_added': 'DateTime', 'symbol': 'TextEdit', 'SHAPE__Length': 'TextEdit', 'SHAPE__Area': 'TextEdit', });
lyr_MSANonMSAsthatareEnergyCommunities_5.set('fieldImages', {'objectid_1': 'TextEdit', 'objectid': 'TextEdit', 'affgeoid_cty_2020': 'TextEdit', 'fipstate_2020': 'TextEdit', 'fipscty_2020': 'TextEdit', 'geoid_cty_2020': 'TextEdit', 'county_name_2020': 'TextEdit', 'state_name': 'TextEdit', 'msa_area_id': 'TextEdit', 'msa_area_name': 'TextEdit', 'ffe_ind_qual': 'TextEdit', 'ec_ind_qual': 'TextEdit', 'msa_qual': 'TextEdit', 'fee_qual_status': 'TextEdit', 'ec_qual_status': 'TextEdit', 'label_fee': 'TextEdit', 'label_ec': 'TextEdit', 'msa_nmsa_label': 'TextEdit', 'date_last_update': 'DateTime', 'dataset_version': 'TextEdit', 'date_record_added': 'DateTime', 'globalid': 'TextEdit', 'SHAPE__Length': 'TextEdit', 'SHAPE__Area': 'TextEdit', });
lyr_AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6.set('fieldImages', {'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'Persistent': 'TextEdit', 'Persiste_1': 'TextEdit', 'Persiste_2': 'TextEdit', 'Persiste_3': 'Range', 'ObjectId': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7.set('fieldImages', {'GEOID10': 'TextEdit', 'SF': 'TextEdit', 'CF': 'TextEdit', 'N_ENY': 'Range', 'ObjectId': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_Category1Eligibility_8.set('fieldImages', {'CensusTrac': 'TextEdit', 'NMTCQualif': 'TextEdit', 'StateName': 'TextEdit', 'CountyName': 'TextEdit', 'Vintage': 'Range', 'CountyFIPS': 'TextEdit', 'ObjectId': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_SDGESubstations_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'CONSTRUCTIONSTATUS': 'TextEdit', 'NAME': 'TextEdit', 'FACILITYID': 'TextEdit', 'SUBSTATIONTYPE_CODE': 'Range', 'LOCATION': 'TextEdit', 'DISTRICT': 'TextEdit', 'SDE_OBJECTID': 'TextEdit', 'GLOBALID': 'TextEdit', 'IMAP_VOLTAGE': 'TextEdit', 'IMAP_LOAD_PROFILE': 'TextEdit', 'SUBSTATIONTYPE': 'TextEdit', 'RESTRICTED': 'TextEdit', 'EXIST_GEN': 'TextEdit', 'QUE_GEN': 'TextEdit', 'TOT_GEN': 'TextEdit', 'PROJ_LOAD': 'TextEdit', 'PENETRATION': 'Range', });
lyr_PGESubstations_10.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'SUBNAME': 'TextEdit', 'SUBSTATIONID': 'Range', 'MIN_KV': 'TextEdit', 'NUMBANKS': 'TextEdit', 'REDACTED': 'TextEdit', 'OBJECTID': 'Range', 'UNGROUNDEDBANKS': 'TextEdit', 'parent': 'TextEdit', });
lyr_SCESubstations_11.set('fieldImages', {'subst_id': 'TextEdit', 'sub_name': 'TextEdit', 'sys_name': 'TextEdit', 'sub_type': 'TextEdit', 'substation_voltage': 'TextEdit', 'existing_gen': 'TextEdit', 'queued_gen': 'TextEdit', 'total_gen': 'TextEdit', 'projected_load': 'TextEdit', 'penetration_level': 'TextEdit', 'max_remain_cap': 'TextEdit', 'note': 'TextEdit', 'objectid': 'TextEdit', });
lyr_CaliforniaUtilities_12.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'TextEdit', 'NAME': 'TextEdit', 'ADDRESS': 'TextEdit', 'CITY': 'TextEdit', 'STATE': 'TextEdit', 'ZIP': 'TextEdit', 'TELEPHONE': 'TextEdit', 'TYPE': 'TextEdit', 'COUNTRY': 'TextEdit', 'NAICS_CODE': 'TextEdit', 'NAICS_DESC': 'TextEdit', 'SOURCE': 'TextEdit', 'SOURCEDATE': 'DateTime', 'VAL_METHOD': 'TextEdit', 'VAL_DATE': 'DateTime', 'WEBSITE': 'TextEdit', 'REGULATED': 'TextEdit', 'CNTRL_AREA': 'TextEdit', 'PLAN_AREA': 'TextEdit', 'HOLDING_CO': 'TextEdit', 'SUMMR_PEAK': 'TextEdit', 'WINTR_PEAK': 'TextEdit', 'SUMMER_CAP': 'TextEdit', 'WINTER_CAP': 'TextEdit', 'NET_GEN': 'Range', 'PURCHASED': 'Range', 'NET_EX': 'Range', 'RETAIL_MWH': 'Range', 'WSALE_MWH': 'Range', 'TOTAL_MWH': 'Range', 'TRANS_MWH': 'Range', 'CUSTOMERS': 'Range', 'YEAR': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_California_13.set('fieldImages', {'STATE': 'TextEdit', 'NAME': 'TextEdit', 'FIPS': 'TextEdit', 'LON': 'TextEdit', 'LAT': 'TextEdit', });
lyr_CaliforniaCounties_14.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'COUNTYNS': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'LSAD': 'TextEdit', 'CLASSFP': 'TextEdit', 'MTFCC': 'TextEdit', 'CSAFP': 'TextEdit', 'CBSAFP': 'TextEdit', 'METDIVFP': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', });
lyr_CaliforniaCountyNames_15.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'COUNTYNS': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'LSAD': 'TextEdit', 'CLASSFP': 'TextEdit', 'MTFCC': 'TextEdit', 'CSAFP': 'TextEdit', 'CBSAFP': 'TextEdit', 'METDIVFP': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', });
lyr_SignedParcelslastupdated111523_16.set('fieldImages', {'id': 'TextEdit', 'Parcel': 'TextEdit', 'owner': 'TextEdit', 'bldblAcr': 'TextEdit', 'LotSize': 'TextEdit', 'Utility': 'TextEdit', });
lyr_SignedParcelslastupdated111523_17.set('fieldImages', {'id': 'TextEdit', 'Parcel': 'TextEdit', 'owner': 'TextEdit', 'bldblAcr': 'TextEdit', 'LotSize': 'TextEdit', 'Utility': 'TextEdit', });
lyr_ParcelNames_18.set('fieldImages', {'id': 'TextEdit', 'Parcel': 'TextEdit', 'owner': 'TextEdit', 'bldblAcr': 'TextEdit', 'LotSize': 'TextEdit', 'Utility': 'TextEdit', });
lyr_CoalClosureEnergyCommunities_4.set('fieldLabels', {});
lyr_MSANonMSAsthatareEnergyCommunities_5.set('fieldLabels', {});
lyr_AdditionalSelectionCriteriaGeographicOption2PersistentPovertyCounty_6.set('fieldLabels', {});
lyr_AdditionalSelectionCriteriaGeographicOption1CEJSTEnergy_7.set('fieldLabels', {});
lyr_Category1Eligibility_8.set('fieldLabels', {});
lyr_SDGESubstations_9.set('fieldLabels', {});
lyr_PGESubstations_10.set('fieldLabels', {});
lyr_SCESubstations_11.set('fieldLabels', {});
lyr_CaliforniaUtilities_12.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'NAME': 'no label', 'ADDRESS': 'no label', 'CITY': 'no label', 'STATE': 'no label', 'ZIP': 'no label', 'TELEPHONE': 'no label', 'TYPE': 'no label', 'COUNTRY': 'no label', 'NAICS_CODE': 'no label', 'NAICS_DESC': 'no label', 'SOURCE': 'no label', 'SOURCEDATE': 'no label', 'VAL_METHOD': 'no label', 'VAL_DATE': 'no label', 'WEBSITE': 'no label', 'REGULATED': 'no label', 'CNTRL_AREA': 'no label', 'PLAN_AREA': 'no label', 'HOLDING_CO': 'no label', 'SUMMR_PEAK': 'no label', 'WINTR_PEAK': 'no label', 'SUMMER_CAP': 'no label', 'WINTER_CAP': 'no label', 'NET_GEN': 'no label', 'PURCHASED': 'no label', 'NET_EX': 'no label', 'RETAIL_MWH': 'no label', 'WSALE_MWH': 'no label', 'TOTAL_MWH': 'no label', 'TRANS_MWH': 'no label', 'CUSTOMERS': 'no label', 'YEAR': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_California_13.set('fieldLabels', {'STATE': 'no label', 'NAME': 'no label', 'FIPS': 'no label', 'LON': 'no label', 'LAT': 'no label', });
lyr_CaliforniaCounties_14.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'COUNTYNS': 'no label', 'GEOID': 'no label', 'NAME': 'header label', 'NAMELSAD': 'no label', 'LSAD': 'no label', 'CLASSFP': 'no label', 'MTFCC': 'no label', 'CSAFP': 'no label', 'CBSAFP': 'no label', 'METDIVFP': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', });
lyr_CaliforniaCountyNames_15.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'COUNTYNS': 'no label', 'GEOID': 'no label', 'NAME': 'no label', 'NAMELSAD': 'no label', 'LSAD': 'no label', 'CLASSFP': 'no label', 'MTFCC': 'no label', 'CSAFP': 'no label', 'CBSAFP': 'no label', 'METDIVFP': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', });
lyr_SignedParcelslastupdated111523_16.set('fieldLabels', {'id': 'header label', 'Parcel': 'header label', 'owner': 'header label', 'bldblAcr': 'header label', 'LotSize': 'header label', 'Utility': 'header label', });
lyr_SignedParcelslastupdated111523_17.set('fieldLabels', {'id': 'no label', 'Parcel': 'header label', 'owner': 'inline label', 'bldblAcr': 'no label', 'LotSize': 'no label', 'Utility': 'no label', });
lyr_ParcelNames_18.set('fieldLabels', {'id': 'no label', 'Parcel': 'header label', 'owner': 'inline label', 'bldblAcr': 'no label', 'LotSize': 'no label', 'Utility': 'no label', });
lyr_ParcelNames_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});