function styleDisplay( style, name) {

    var $stWidth;

    switch (name) {

        case "10":
            $stWidth = style * 0.1
            break;
        case "20":
            $stWidth = style * 0.2
            break;
        case "30":
            $stWidth = style * 0.3
            break;
        case "40":
            $stWidth = style * 0.4
            break;

        case "50":
            $stWidth = style * 0.5
            break;

        case "60":
            $stWidth = style * 0.6
            break;

        case "70":
            $stWidth = style * 0.7
            break;

        case "80":
            $stWidth = style * 0.8
            break;

        case "90":
            $stWidth = style * 0.9
            break;

        case "100":
            $stWidth = style * 1
            break;

        default:
            break;
    }
    return $stWidth;
}