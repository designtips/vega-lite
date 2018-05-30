import * as tslib_1 from "tslib";
import { X, Y } from '../../channel';
import { isFieldDef } from '../../fielddef';
import * as log from '../../log';
import { RECT } from '../../mark';
import { hasDiscreteDomain, ScaleType } from '../../scale';
import * as mixins from './mixins';
export var rect = {
    vgMark: 'rect',
    encodeEntry: function (model) {
        return tslib_1.__assign({}, mixins.baseEncodeEntry(model, { size: 'ignore', orient: 'ignore' }), x(model), y(model));
    }
};
export function x(model) {
    var xDef = model.encoding.x;
    var x2Def = model.encoding.x2;
    var xScale = model.getScaleComponent(X);
    var xScaleType = xScale ? xScale.get('type') : undefined;
    if (isFieldDef(xDef) && xDef.bin && !x2Def) {
        return mixins.binnedPosition(xDef, 'x', model.scaleName('x'), 0, xScale.get('reverse'));
    }
    else if (isFieldDef(xDef) && xScale && hasDiscreteDomain(xScaleType)) {
        /* istanbul ignore else */
        if (xScaleType === ScaleType.BAND) {
            return mixins.bandPosition(xDef, 'x', model);
        }
        else {
            // We don't support rect mark with point/ordinal scale
            throw new Error(log.message.scaleTypeNotWorkWithMark(RECT, xScaleType));
        }
    }
    else { // continuous scale or no scale
        return tslib_1.__assign({}, mixins.pointPosition('x', model, 'zeroOrMax'), mixins.pointPosition2(model, 'zeroOrMin', 'x2'));
    }
}
export function y(model) {
    var yDef = model.encoding.y;
    var y2Def = model.encoding.y2;
    var yScale = model.getScaleComponent(Y);
    var yScaleType = yScale ? yScale.get('type') : undefined;
    if (isFieldDef(yDef) && yDef.bin && !y2Def) {
        return mixins.binnedPosition(yDef, 'y', model.scaleName('y'), 0, yScale.get('reverse'));
    }
    else if (isFieldDef(yDef) && yScale && hasDiscreteDomain(yScaleType)) {
        /* istanbul ignore else */
        if (yScaleType === ScaleType.BAND) {
            return mixins.bandPosition(yDef, 'y', model);
        }
        else {
            // We don't support rect mark with point/ordinal scale
            throw new Error(log.message.scaleTypeNotWorkWithMark(RECT, yScaleType));
        }
    }
    else { // continuous scale or no scale
        return tslib_1.__assign({}, mixins.pointPosition('y', model, 'zeroOrMax'), mixins.pointPosition2(model, 'zeroOrMin', 'y2'));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21waWxlL21hcmsvcmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDbkMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sS0FBSyxHQUFHLE1BQU0sV0FBVyxDQUFDO0FBQ2pDLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFDaEMsT0FBTyxFQUFDLGlCQUFpQixFQUFFLFNBQVMsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUl6RCxPQUFPLEtBQUssTUFBTSxNQUFNLFVBQVUsQ0FBQztBQUVuQyxNQUFNLENBQUMsSUFBTSxJQUFJLEdBQWlCO0lBQ2hDLE1BQU0sRUFBRSxNQUFNO0lBQ2QsV0FBVyxFQUFFLFVBQUMsS0FBZ0I7UUFDNUIsNEJBQ0ssTUFBTSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUMsQ0FBQyxFQUNqRSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQ1IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUNYO0lBQ0osQ0FBQztDQUNGLENBQUM7QUFFRixNQUFNLFlBQVksS0FBZ0I7SUFDaEMsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDOUIsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7SUFDaEMsSUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFDLElBQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBRTNELElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDMUMsT0FBTyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0tBQ3pGO1NBQU0sSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxJQUFJLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQ3RFLDBCQUEwQjtRQUMxQixJQUFJLFVBQVUsS0FBSyxTQUFTLENBQUMsSUFBSSxFQUFFO1lBQ2pDLE9BQU8sTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzlDO2FBQU07WUFDTCxzREFBc0Q7WUFDdEQsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO1NBQ3pFO0tBQ0Y7U0FBTSxFQUFFLCtCQUErQjtRQUN0Qyw0QkFDSyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsV0FBVyxDQUFDLEVBQzdDLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsRUFDbEQ7S0FDSDtBQUNILENBQUM7QUFFRCxNQUFNLFlBQVksS0FBZ0I7SUFDaEMsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDOUIsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7SUFDaEMsSUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFDLElBQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBRTNELElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDMUMsT0FBTyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0tBQ3pGO1NBQU0sSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxJQUFJLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQ3RFLDBCQUEwQjtRQUMxQixJQUFJLFVBQVUsS0FBSyxTQUFTLENBQUMsSUFBSSxFQUFFO1lBQ2pDLE9BQU8sTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzlDO2FBQU07WUFDTCxzREFBc0Q7WUFDdEQsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO1NBQ3pFO0tBQ0Y7U0FBTSxFQUFFLCtCQUErQjtRQUN0Qyw0QkFDSyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsV0FBVyxDQUFDLEVBQzdDLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsRUFDbEQ7S0FDSDtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1gsIFl9IGZyb20gJy4uLy4uL2NoYW5uZWwnO1xuaW1wb3J0IHtpc0ZpZWxkRGVmfSBmcm9tICcuLi8uLi9maWVsZGRlZic7XG5pbXBvcnQgKiBhcyBsb2cgZnJvbSAnLi4vLi4vbG9nJztcbmltcG9ydCB7UkVDVH0gZnJvbSAnLi4vLi4vbWFyayc7XG5pbXBvcnQge2hhc0Rpc2NyZXRlRG9tYWluLCBTY2FsZVR5cGV9IGZyb20gJy4uLy4uL3NjYWxlJztcbmltcG9ydCB7VmdFbmNvZGVFbnRyeX0gZnJvbSAnLi4vLi4vdmVnYS5zY2hlbWEnO1xuaW1wb3J0IHtVbml0TW9kZWx9IGZyb20gJy4uL3VuaXQnO1xuaW1wb3J0IHtNYXJrQ29tcGlsZXJ9IGZyb20gJy4vYmFzZSc7XG5pbXBvcnQgKiBhcyBtaXhpbnMgZnJvbSAnLi9taXhpbnMnO1xuXG5leHBvcnQgY29uc3QgcmVjdDogTWFya0NvbXBpbGVyID0ge1xuICB2Z01hcms6ICdyZWN0JyxcbiAgZW5jb2RlRW50cnk6IChtb2RlbDogVW5pdE1vZGVsKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLm1peGlucy5iYXNlRW5jb2RlRW50cnkobW9kZWwsIHtzaXplOiAnaWdub3JlJywgb3JpZW50OiAnaWdub3JlJ30pLFxuICAgICAgLi4ueChtb2RlbCksXG4gICAgICAuLi55KG1vZGVsKSxcbiAgICB9O1xuICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24geChtb2RlbDogVW5pdE1vZGVsKTogVmdFbmNvZGVFbnRyeSB7XG4gIGNvbnN0IHhEZWYgPSBtb2RlbC5lbmNvZGluZy54O1xuICBjb25zdCB4MkRlZiA9IG1vZGVsLmVuY29kaW5nLngyO1xuICBjb25zdCB4U2NhbGUgPSBtb2RlbC5nZXRTY2FsZUNvbXBvbmVudChYKTtcbiAgY29uc3QgeFNjYWxlVHlwZSA9IHhTY2FsZSA/IHhTY2FsZS5nZXQoJ3R5cGUnKSA6IHVuZGVmaW5lZDtcblxuICBpZiAoaXNGaWVsZERlZih4RGVmKSAmJiB4RGVmLmJpbiAmJiAheDJEZWYpIHtcbiAgICByZXR1cm4gbWl4aW5zLmJpbm5lZFBvc2l0aW9uKHhEZWYsICd4JywgbW9kZWwuc2NhbGVOYW1lKCd4JyksIDAsIHhTY2FsZS5nZXQoJ3JldmVyc2UnKSk7XG4gIH0gZWxzZSBpZiAoaXNGaWVsZERlZih4RGVmKSAmJiB4U2NhbGUgJiYgaGFzRGlzY3JldGVEb21haW4oeFNjYWxlVHlwZSkpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmICh4U2NhbGVUeXBlID09PSBTY2FsZVR5cGUuQkFORCkge1xuICAgICAgcmV0dXJuIG1peGlucy5iYW5kUG9zaXRpb24oeERlZiwgJ3gnLCBtb2RlbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFdlIGRvbid0IHN1cHBvcnQgcmVjdCBtYXJrIHdpdGggcG9pbnQvb3JkaW5hbCBzY2FsZVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGxvZy5tZXNzYWdlLnNjYWxlVHlwZU5vdFdvcmtXaXRoTWFyayhSRUNULCB4U2NhbGVUeXBlKSk7XG4gICAgfVxuICB9IGVsc2UgeyAvLyBjb250aW51b3VzIHNjYWxlIG9yIG5vIHNjYWxlXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLm1peGlucy5wb2ludFBvc2l0aW9uKCd4JywgbW9kZWwsICd6ZXJvT3JNYXgnKSxcbiAgICAgIC4uLm1peGlucy5wb2ludFBvc2l0aW9uMihtb2RlbCwgJ3plcm9Pck1pbicsICd4MicpXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24geShtb2RlbDogVW5pdE1vZGVsKTogVmdFbmNvZGVFbnRyeSB7XG4gIGNvbnN0IHlEZWYgPSBtb2RlbC5lbmNvZGluZy55O1xuICBjb25zdCB5MkRlZiA9IG1vZGVsLmVuY29kaW5nLnkyO1xuICBjb25zdCB5U2NhbGUgPSBtb2RlbC5nZXRTY2FsZUNvbXBvbmVudChZKTtcbiAgY29uc3QgeVNjYWxlVHlwZSA9IHlTY2FsZSA/IHlTY2FsZS5nZXQoJ3R5cGUnKSA6IHVuZGVmaW5lZDtcblxuICBpZiAoaXNGaWVsZERlZih5RGVmKSAmJiB5RGVmLmJpbiAmJiAheTJEZWYpIHtcbiAgICByZXR1cm4gbWl4aW5zLmJpbm5lZFBvc2l0aW9uKHlEZWYsICd5JywgbW9kZWwuc2NhbGVOYW1lKCd5JyksIDAsIHlTY2FsZS5nZXQoJ3JldmVyc2UnKSk7XG4gIH0gZWxzZSBpZiAoaXNGaWVsZERlZih5RGVmKSAmJiB5U2NhbGUgJiYgaGFzRGlzY3JldGVEb21haW4oeVNjYWxlVHlwZSkpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmICh5U2NhbGVUeXBlID09PSBTY2FsZVR5cGUuQkFORCkge1xuICAgICAgcmV0dXJuIG1peGlucy5iYW5kUG9zaXRpb24oeURlZiwgJ3knLCBtb2RlbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFdlIGRvbid0IHN1cHBvcnQgcmVjdCBtYXJrIHdpdGggcG9pbnQvb3JkaW5hbCBzY2FsZVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGxvZy5tZXNzYWdlLnNjYWxlVHlwZU5vdFdvcmtXaXRoTWFyayhSRUNULCB5U2NhbGVUeXBlKSk7XG4gICAgfVxuICB9IGVsc2UgeyAvLyBjb250aW51b3VzIHNjYWxlIG9yIG5vIHNjYWxlXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLm1peGlucy5wb2ludFBvc2l0aW9uKCd5JywgbW9kZWwsICd6ZXJvT3JNYXgnKSxcbiAgICAgIC4uLm1peGlucy5wb2ludFBvc2l0aW9uMihtb2RlbCwgJ3plcm9Pck1pbicsICd5MicpXG4gICAgfTtcbiAgfVxufVxuIl19