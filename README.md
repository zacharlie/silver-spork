# Silver Spork

The aim of this repo is to teach users how to easily publish basic webmaps using QGIS Desktop and GitHub Pages.

The concepts outlined in this documentation and the samples provided may be relevant to various digital assets and web technologies, however this project is of course primarily focussed on simple spatial data services.

## TL;DR

- Create a [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages) repository
- Create a basic web map with static assets. You can use libraries like Leaflet or OpenLayers to structure static html elements, or use QGIS Desktop with the QGIS2Web plugin to compile a customised web map to a collection of static assets which can be published to GitHub.

## Notes

There are a greate many considerations to take into account when publishing assets to the internet, especially when it comes to geospatial applications and web mapping projects. This repository is not optimized for best practices and efficient resource utilisation, and most of the technologie used will have their own consideration outlined in the relevant sections.

The samples provided here are provided for demonstration purposes only and should not be considerd effective reference implementations! The following list outlines some general considerations which apply to the majority of generic implementations:

- Usage: Any free service is likely not designed for high throughput and although hosting services in this manner for community projects may be beneficial, it should not be relied upon. If you are using the service for commercial purposes, it might be useful for experimentation but is definitely not a suitable option for production purposes.
- Performance: Most static assets and simplified applications will not be optimised effectively, but worse still is that in instances like qgis2web packaging up spatial data as JSON objects, the default performance will be very very poor. In those cases, all the data must be downloaded before the map is even rendered, and is only suitable for very simple projects. In most production instances, dedicated web map services are the recommended approach for web map production. Using free-tier services will also excacerbate already problemati performance issues as well.
- Efficiency: Most simple implementations will rely on remote resources and CDNs with online support. Most toolkits for map production (e.g. qgis2web) are not going to optimise resource utilisation either. For example, the javascript libraries and resources produced by qgis2web are duplicated for every output, leading to massive duplication and ineffective resource usage which is difficult to correct manually.
- Access: Services like GitHub pages don't control access to your assets, so everything you publish is going to be wholly public.
- Complexity: Some services and processes, whilst trying to keep things simple, are inflexible and/ or introduce additional complexity in attempts to rectify some ege cases or specific requirements. An example might be using QGIS2Web, where some links and references are http rather than https, resulting in mixed-mode services which are problematic and require additional processes and skills to correct.
- Limitations: Each process has limitations, and map production is rarely a WYSIWYG eperience unless using an appropriate framework like QGIS server.

Of course in many instances, it may be useful to quickly publish or expose some data for public consumption, and this project is specifically designed to lower the barriers for entry in doing so, especially for projects with significant community benefit which may be produced and published by agents with limited expertise in web map development.

With this in mind, if you are producing any applications which are intended for production applications, long term utilisation, or optimised in any way, it is recommended that other options are used for publication. At the very least, renting your own VPS to deploy static assets, or using a dedicated jamstack service like netlify, vercel, or a CDN.

An example framework under development for this purpose is the https://github.com/kartoza/osgs project, which has been designed to make publication of static assets simple, includes the ability for simple spatial-service specific static project pages with Hugo and Markdown, and provides a unified platform for storing, publishing, and managing spatial data and web services.

## ToS

Please note that GitHub pages is not intended as a free web hosting service and includes it's own terms of service which outline limitations on the acceptable use and activities for the service.

## Technologies

Various technologies can be used to simply publish, share, and collaborate on spatial information.

- GeoJSON: GitHub will actually create a leaflet map view with OSM tiles and show off your data automagically. It's pretty awesome.
- Web map apps and frameworks
- Web map services
- Map compilation utilities

## Samples

Links to example map projects

### QGIS2Web

A QGIS Desktop plugin for packaging a map project as a collection of static assets

#### OpenLayers3

Default QGIS2Web output

- [Easter Eggs](./qgis2web/ol3/easter/index.html): A basic openlayers map with the standard QGIS Easter Egg data

#### Leaflet

Default QGIS2Web output

- [Easter Eggs](./qgis2web/leaflet/easter/index.html): A basic leaflet map with the standard QGIS Easter Egg data

#### Mapbox

Default QGIS2Web output

- [Easter Eggs](./qgis2web/mapbox/easter/index.html): A basic Mapbox GL JS map with the standard QGIS Easter Egg data

## Guides

todo;

## Why silver spork

Ask the GitHub engineers and their odd adjective-noun bot. I figure they knew I never got a silver spoon so they were just teasing and I found it funny so I rolled with it.
