<template>
  <div>
    <h2 class="text-2xl text-bold text-gray-800">
      Run
    </h2>

    <div id="map-wrap" class="min-w-1/2 w-1/2" style="height: 40vw; width: 40vw; overflow: auto;">
      <client-only>
        <l-map :zoom="15" :center="center" @ready="initMap">
          <l-tile-layer
            :url="url"
            :attribution="attribution"
          />
          <l-marker
            :lat-lng="[center.lat, center.lng]"
            :icon="icon"
          >
            <l-popup> Hello, this is a star on Agatas run from {{ center }}</l-popup>
          </l-marker>
          <l-polyline :lat-lngs="polyline.latlngs" :color="polyline.color" />
        </l-map>
      </client-only>
    </div>
  </div>
</template>

<script>
const polyUtil = require('polyline-encoded')

export default {
  name: 'Run',
  data () {
    return {
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a\n' +
          '        href="https://www.flaticon.com/"\n' +
          '        title="Flaticon"\n' +
          '      >www.flaticon.com</a>',
      icon: null,
      polyline: {
        latlngs: [],
        color: 'DeepPink'
      },
      center: {
        lat: 41.279736,
        lng: 0.723744
      }
    }
  },
  methods: {

    initMap () {
      this.setIconStyles()
      this.decode()
    },

    setIconStyles () {
      this.icon = this.$L.icon({
        iconUrl: require('~/assets/bw_star_marker.png')
      })
    },

    decode () {
      const encoded = 'im}zFkjlCWpADBGHLBCUISIK@FCGKI[e@Om@KUC[EU@CJHCc@GM?Y@@@ABHALHB\\\\GNAPGNSZQf@Af@ICDDA?BNA?HLPXDl@Qb@UHBVn@NVRR`@HJFpBnC^^LXHh@JVVZVBNHdABRD`A@h@C@?C@D?fAe@ZELBPNTFf@A`@JFANDDARJl@p@Pj@HFLAHDHL@NAKDCBVRp@A@JTRTVPZh@BHFD^p@@DCL@RDV?NRLHLLh@HJRh@JNZx@Hp@BH?PCRCEDa@DM@KGQ?QK_@m@{AWw@U_@KW@WKe@O_@MMc@y@gAqAEM?IQ]C?SOIC_@o@IEa@e@_@OMA?@MGC@M?A@E?CDQKm@SKMG?M?GB?AIHOBs@\\\\UA_@DUEI@q@AI@ME_@A_@GC@E?UOIQOs@We@q@y@}@wAIGU]SGIAWMa@k@O]@QDCLWGSIA[Ha@@GBONKDICGKI_@Eu@YaBAUDSHgBHe@@k@TwAH[Hs@b@m@Ty@HMRk@l@}@E?EBGLWRGJ]|@Sv@MTMJEJGZK~@M`@Ij@S|BEz@En@Z`BLfADNHNAHEBIJq@FO?KBc@AWP[DEDUBOFE@OICB?FHHEJ?LCDDFABGCAH@XD`@AL@PDF@LHJ@HDJf@j@DCB@@JABHF?D?CMOm@_@IFE@BHCFO?Qb@MPOx@Iz@FPBA@DAEE@r@R'
      this.polyline.latlngs = polyUtil.decode(encoded)
    }
  }
}
</script>

<style scoped>

</style>
